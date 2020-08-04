import useToggle from '../src/useToggle';
import { act, renderHook } from '@testing-library/react-hooks';

const setUp = (initialValue: boolean) => renderHook(() => useToggle(initialValue));

describe("useToogle test", () => {
  it('should init state to true', () => {
    const { result } = setUp(true)

    expect(result.current[0]).toBe(true);
    expect(result.current[1]).toBeInstanceOf(Function);
    // expect(typeof result.current[1]).toBe('function');
  })
  it('should toogle to be a function', () => {
    const { result } = setUp(true)
    expect(result.current[1]).toBeInstanceOf(Function);
    expect(result.current[2]).toBeInstanceOf(Function);
    expect(result.current[3]).toBeInstanceOf(Function);
    expect(result.current[4]).toBeInstanceOf(Function);
  })
  // it('should set state to true',()=> {
  //   const { result } = setUp(false)
  //   const [value, setTrue] = result.current;
  //   expect(result.current[0]).toBe(false);
  //   act(()=>{
  //     setTrue()
  //   })
  //   expect(value).toBe(true)
  // })
})
