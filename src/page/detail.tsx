export default function Detail() {
  fetch('/api/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json))

  return <div>详情页测试</div>
}
