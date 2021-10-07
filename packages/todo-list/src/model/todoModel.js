export default function todoListModel(todoList = [], action) {

    const { type, payload = [] } = action;

    switch(type) {

        case 'init': {
            return payload.concat();
        }
 
        case 'add': {
            const nextTodoList = todoList.concat();
            nextTodoList.push(payload);
            return nextTodoList;
        }

        case 'remove': {
            const { id } = payload;
            return todoList.filter(item => item.id !== id);
        }

        case 'update': {
            const { id } = payload;

            return todoList.map(item => {
                if (item.id === id) {
                    Object.assign(item, payload);
                }
                return item;
            });
        }

        default: {
            return todoList;
        }
    }
}