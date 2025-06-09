import reducer, {
  addItems,
  removeItems,
  removeSingleItem,
  clearCart
} from '../../utils/cartSlice';
import '@testing-library/jest-dom';


describe('cartSlice reducers', () => {
  it('adds items', () => {
    const next = reducer({ items: [] }, addItems({ id: 'x' }));
    expect(next.items).toHaveLength(1);
  });

  it('pops last item', () => {
    const prev = { items: [{ id: 'a' }, { id: 'b' }] };
    const next = reducer(prev, removeItems());
    expect(next.items).toEqual([{ id: 'a' }]);
  });

  it('removes a specific item', () => {
    const item = { card: { info: { id: '42' } } };
    const prev = { items: [item] };
    const next = reducer(prev, removeSingleItem({ card: { info: { id: '42' } } }));
    expect(next.items).toHaveLength(0);
  });

  it('clears cart', () => {
    const next = reducer({ items: [{}, {}] }, clearCart());
    expect(next.items).toEqual([]);
  });
});
