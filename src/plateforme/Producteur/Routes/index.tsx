import { v4 as uuid } from 'uuid';
import { Route } from 'react-router-dom';
import { protectedRouterProducteur } from './Routes';

export const protectedRouteProducteur = protectedRouterProducteur.map(({ protectedPath , protectedElement }) => <Route key={uuid()} path = {protectedPath} element={protectedElement} />);