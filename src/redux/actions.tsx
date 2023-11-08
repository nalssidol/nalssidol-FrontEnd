export const increment = () => ({
  type: "INCREMENT" as const,
});

export const decrement = () => ({
  type: "DECREMENT" as const,
});

// 액션 객체의 타입 정의
export type CounterActionTypes = ReturnType<
  typeof increment | typeof decrement
>;
