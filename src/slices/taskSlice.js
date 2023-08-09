import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import taskServices from "../services/taskServices";


const reterieveAllTasks = createAsyncThunk("taskList/retrieve", async () => {
  const response = await taskServices.getAllTask();
  return response.data;
});

const createTaskApi = createAsyncThunk("taskList/create", async (data) => {
  const response = await taskServices.creatTask(data);
  return response.data;
});

const deleteTaskApi = createAsyncThunk("taskList/delete", async (id) => {
  await taskServices.deleteTask(id);
  return { id }; // because it goes as a payload in action so that is pass a object
});


const editTaskApi = createAsyncThunk("contact/edit", async (data) => {
    return await (
      await taskServices.editTask(data.id, data)
    ).data;
  });


  



const initialState = {
  taskList: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {},

  extraReducers: {
    [reterieveAllTasks.fulfilled]: (state, action) => {
      state.taskList = action.payload;
    },
    [createTaskApi.fulfilled]: (state, action) => {
      state.taskList.push(action.payload);
    },
    [deleteTaskApi.fulfilled]: (state, {payload}) => {
      const idx = state.taskList.findIndex((task) => task.id === payload.id);
      state.taskList.splice(idx, 1);
    },


    [editTaskApi.fulfilled]: (state, action) => {
        state.taskList = state.taskList.map((task) =>
          task.id === action.payload.id ? { ...action.payload } : task
        );
      },


  },
});

export {
    reterieveAllTasks,
    createTaskApi,
    deleteTaskApi,
    editTaskApi
};

export const { setEditContact } = taskSlice.actions;
export const taskSelector = (state) => state.task;
export default taskSlice.reducer;