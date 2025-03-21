import { v4 as uuid } from 'uuid';
import { Route } from 'react-router-dom';
import { protectedRouterAdmin } from './Routes';

export const protectedRouteAdmin = protectedRouterAdmin.map(({ protectedPath , protectedElement }) => <Route key={uuid()} path = {protectedPath} element={protectedElement} />);