import { v4 as uuid } from 'uuid';
import { Route } from "react-router-dom";
import { routerProprio } from './Routes';

export const routedProprio = routerProprio.map(({Path, Element}) => <Route key={uuid()} path = {Path} element={Element} />);