import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../api.js";

export const get_cities = createAsyncThunk('get_cities', async () => {
    try {
        const response = await axios.get(`${apiUrl}/cities?name=` )
        // console.log(response.data.cities);
        return {
            cities: response.data.cities
        }
    } catch (error) {
        console.log(error)
    }
})

export const filtered_cities = createAsyncThunk('filtered_cities', async (obj) => {
    try {
        const response = await axios.get(`${apiUrl}/cities?name=${obj.name}`)
        return {
            cities: response.data.cities
        }
    } catch (error) {
        return {
            cities : []
        }
    }
})
