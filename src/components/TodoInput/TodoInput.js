import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TodoInput = () => (<div>
      <TextField
          id="standard-textarea"
          placeholder="Введите задачу"
          multiline
        />
        <Button color="primary">Добавить</Button>
</div>);

export default TodoInput;