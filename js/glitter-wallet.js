/*
 * Glitter Wallet - the ONE module that knows how Glitter is stored.
 *
 * Today: a LOCAL, just-for-fun store in localStorage. No real money, no network,
 * no blockchain, no wallet connection, nothing leaves the device.
 *
 * Tomorrow: write an adapter object with the same async methods (for example one
 * backed by an EVM wallet and a token contract) and call
 * GlitterWallet.setWalletAdapter(myAdapter). The game only ever talks to the
 * interface below, so nothing else needs to change.
 *
 * Adapter interface (all async):
 *   connect() -> { address }        disconnect()
 *   getAddress() -> string|null     isConnected() -> boolean
 *   getBalance() -> number
 *   earn(amount, reason) -> number (new balance)
 *   spend(amount, itemId) -> { ok, balance }
 *   listOwned() -> string[]         getEquipped() -> {slot: id}
 *   equip(slot, id)                 reset()
 * Events (GlitterWallet.on(name, fn)): 'balance', 'earn', 'spend', 'connect', 'disconnect'
 */
const KEY = 'mootopia.glitter.v1';
const blank = () => ({ balance: 0, owned: [], equipped: {}, lifetime: 0 });

export function createLocalAdapter() {
  const load = () => { try { return Object.assign(blank(), JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) { return blank(); } };
  const save = (s) => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} };
  return {
    name: 'local',
    async connect() { return { address: null }; },     // local store has no address
    async disconnect() {},
    async getAddress() { return null; },
    async isConnected() { return false; },
    async getBalance() { return load().balance; },
    async earn(amount) { const s = load(), n = Math.max(0, Math.floor(amount)); s.balance += n; s.lifetime += n; save(s); return s.balance; },
    async spend(amount, itemId) {
      const s = load(), n = Math.max(0, Math.floor(amount));
      if (s.balance < n) return { ok: false, balance: s.balance };
      s.balance -= n; if (itemId && !s.owned.includes(itemId)) s.owned.push(itemId); save(s);
      return { ok: true, balance: s.balance };
    },
    async listOwned() { return load().owned.slice(); },
    async getEquipped() { return Object.assign({}, load().equipped); },
    async equip(slot, id) { const s = load(); s.equipped[slot] = id; save(s); return Object.assign({}, s.equipped); },
    async reset() { save(blank()); },
  };
}

let adapter = createLocalAdapter();
const handlers = {};
function emit(name, data) { (handlers[name] || []).forEach((f) => { try { f(data); } catch (e) {} }); }

export const GlitterWallet = {
  get adapterName() { return adapter.name; },
  setWalletAdapter(a) { adapter = a; emit('balance', null); },
  on(name, fn) { (handlers[name] = handlers[name] || []).push(fn); return () => { handlers[name] = handlers[name].filter((f) => f !== fn); }; },
  async connect() { const r = await adapter.connect(); emit('connect', r); return r; },
  async disconnect() { await adapter.disconnect(); emit('disconnect'); },
  getAddress: () => adapter.getAddress(),
  isConnected: () => adapter.isConnected(),
  getBalance: () => adapter.getBalance(),
  async earn(amount, reason) { const b = await adapter.earn(amount, reason); emit('earn', { amount, reason, balance: b }); emit('balance', b); return b; },
  async spend(amount, itemId) { const r = await adapter.spend(amount, itemId); if (r.ok) { emit('spend', { amount, itemId, balance: r.balance }); emit('balance', r.balance); } return r; },
  listOwned: () => adapter.listOwned(),
  getEquipped: () => adapter.getEquipped(),
  equip: (slot, id) => adapter.equip(slot, id),
  async reset() { await adapter.reset(); emit('balance', 0); },
};
export default GlitterWallet;
