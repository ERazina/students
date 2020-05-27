const initialState = {
    students: ['Steve Jobs', 'Bill Gates']
}
  
export default function students(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }
  
    // Пока не обрабатываем никаких экшенов
    // и просто возвращаем состояние, которое приняли в качестве параметра
    return state;
}