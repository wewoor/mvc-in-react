import { Model } from "react-mvc";

export interface Todo {
    id: string;
    name: string;
    finished?: boolean;
}

export interface ITodoListModel extends Model<{data: Todo[]}> {

    init(data: Todo[]): void;
    get(id: string): Todo | undefined;
    add(item: Todo): void;
    remove(id: string): void;
    update(item: Todo): void;
}


class TodoListModel extends Model<{ data: Todo[]}> implements ITodoListModel {

    state: { data: Todo[] } = { data: [] }

    init(data: Todo[]) {
        this.setState({
            data
        });
    }

    get(id: string): Todo | undefined {
        return this.state.data.find(item => item.id === id);
    }

    add(item: Todo) {
        const nextTodoList = this.state.data.concat();
        nextTodoList.push(item);
        this.setState({ data: nextTodoList });
    }

    remove(id: string) {
        const nextList = this.state.data.filter(item => item.id !== id);
        this.setState({ data: nextList });
    }

    update(item: Todo) {
        const { id } = item;
        const nextState = this.state.data.concat();

        nextState.forEach(o => {
            if (o.id === id) {
                Object.assign(o, item);
            }
        });
        this.setState({ data: nextState });
    }
}

export default TodoListModel;

