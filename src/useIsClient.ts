
import { useState, useEffect } from 'react';
/**
 * 自定义Hook，用于确定当前执行环境是否在客户端。
 * 
 * 在React组件中，由于组件最初在服务器（服务端渲染）和浏览器（客户端渲染）上都可能执行，
 * 这个Hook可以帮助我们识别当前的执行环境，以便进行相应的逻辑处理。
 * 
 * @returns {boolean} 当前是否在客户端执行。返回`true`表示在客户端，`false`表示在服务端。
 */
function useIsClient() {
  // 初始化状态，假设初始不在客户端
  const [isClient, setIsClient] = useState(false);

  // 当组件挂载时，设置状态为true，表明此时在客户端
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 返回判断结果，用于确定是否在客户端
  return isClient;
}

export default useIsClient;
