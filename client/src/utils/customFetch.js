/*
 *   Copyright (c) 2025 RCUBE PLANET PVT LTD
 *   All rights reserved.
 */
import axios from "axios";

const customFetch = axios.create({
  baseURL: "/api/v1",
});

export default customFetch;
