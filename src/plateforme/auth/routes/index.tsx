import { v4 as uuid } from 'uuid';
import { Route } from "react-router-dom";
import {routerAuth} from "./Routes";

export const routedAuth = routerAuth.map(({Path, Element}) => <Route key={uuid()} path = {Path} element={Element} />);