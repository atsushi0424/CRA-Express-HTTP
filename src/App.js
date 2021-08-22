import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {

  const onButtonClick = () => {
    const newTodoItemTitleInput = document.getElementById('new-todo-item-title').value;
    // console.log(newTodoItemTitleInput);
    // const postData = {name: e.target.value};
    const postData = {name: newTodoItemTitleInput};
    // console.log(postData);
    axios.post("http://localhost:3001", postData)
    .then(res => {
      alert("「" + postData.name + "」を登録しました。");
      document.getElementById('new-todo-item-title').value = "";
    })
    .catch(err => {
      alert("「" + postData.name + "」の登録に失敗しました。");
      console.log(err, postData);
    });
  };

  const showAllPost = () => {
    axios.get('http://localhost:3001')
    .then(res => {
        const listContainer = document.querySelector('#post-list');
        listContainer.innerHTML = '';
        res.data.forEach(element => {
          const li = document.createElement('li');   
          const text = new Text(element);
          li.appendChild(text);
          listContainer.appendChild(li);             
        });
    })
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/5">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              Text
            </label>
          </div>
          <div class="md:w-2/5">
            <input 
              id="new-todo-item-title" 
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
              type="text" 
              placeholder="Hello, World!" />
          </div>
          <div class="md:w-2/5">
            <button 
              id="new-todo-item-add-button" 
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
              type="button"
              onClick={onButtonClick}>
              POST
            </button>
          </div>
        </div>
        <button class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
          onClick={showAllPost}
        >
          Show All Post
        </button>
        <ul class="list-disc" id="post-list"></ul>
      </header>
    </div>
  );
}

export default App;
