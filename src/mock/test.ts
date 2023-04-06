export default [
  {
    url: '/api/todos/1',
    method: 'get',
    response: () => ({
      code: 200,
      message: 'ok',
      data: { success: true }
    })
  }
]
