# 프로젝트 배포 URL

https://khw-fe-1-two.vercel.app/

# 프로젝트 URL

1. 루트(/)
2. Auth(/auth)
3. Todos(/todos) - content에 따라 (/todos/:id)

> Todo List의 경로지정이 따로 없어 `/todos` 로 설정하고 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회를 위해 `/todos/:id` 로 뒤로가기 한 개별 Todo 조회를 처리

# 프로젝트 프레임워크 및 라이브러리

1. React
2. Axios
3. styled-components

# 프로젝트 구조

```
📦src
┣ 📂components
┃ ┣ 📂Auth
┃ ┃ ┗ 📜AuthForm.jsx
┃ ┣ 📂Common
┃ ┃ ┣ 📜Button.jsx
┃ ┃ ┗ 📜Input.jsx
┃ ┣ 📂Root
┃ ┃ ┗ 📜RootForm.jsx
┃ ┗ 📂Todos
┃ ┃ ┣ 📜EditForm.jsx
┃ ┃ ┗ 📜TodosForm.jsx
┣ 📂pages
┃ ┣ 📜Auth.js
┃ ┣ 📜NotFound.js
┃ ┣ 📜Root.js
┃ ┗ 📜Todos.js
┣ 📂routes
┃ ┣ 📜PrivateRoute.js
┃ ┣ 📜PublicRoute.js
┃ ┗ 📜Router.js
┣ 📂utils
┃ ┣ 📜auth-validate-fn.js
┃ ┣ 📜axios-api-fn.js
┃ ┣ 📜axios-setting.js
┃ ┣ 📜constants.js
┃ ┗ 📜local-storage-fn.js
┣ 📜App.js
┗ 📜index.js
```
