import { createSlice } from '@reduxjs/toolkit';
import { generateId } from '../../helpers/uuid';

export interface costFormat {
  id?: any;
  status: boolean;
  description: string;
  valor: string;
  cuotas?: number;
  cuotasPagadas?: number;
}

const costs = [
  { status: true, description: "Alquiler", valor: "15k" },
  { status: true, description: "Natación", valor: "3k" },
  { status: true, description: "Inglés", valor: "2.5k" },
];

export const finanzasSlice = createSlice({
  name: 'finanzas',
  initialState: {
    monthConsts: [],
  },
  reducers: {
    clearMonthCosts: (state) => {
      state.monthConsts = [];
    },
    changeCostStatus: (state,{payload}) => {
      const newData: costFormat[] = [];
      state.monthConsts.forEach((data: costFormat) => {
        const { id } = data;
        if (id === payload.id) newData.push({...data, status: !data.status})
        else newData.push({...data, id});
      })
      state.monthConsts = newData;
    },
    addCost: (state, { payload }) => {
      const randomId = generateId();
      state.monthConsts = [...state.monthConsts, {id: randomId, ...payload }];
    }
  },
})

export const { clearMonthCosts, changeCostStatus, addCost } = finanzasSlice.actions

export const selectMonthCosts = (state) => state.finanzas.monthConsts

export default finanzasSlice.reducer