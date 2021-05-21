import React from 'react';
import Home from './components/Home';
import Agenda from './components/Agenda';
import Registration from './components/Registration';
import Speaker from './components/Speaker';

const routes = {
    '/': () => <Home />,
    '/event-agenda': () => <Agenda />,
    '/register': () => <Registration />,
    '/speakers': () => <Speaker />
};

export default routes;