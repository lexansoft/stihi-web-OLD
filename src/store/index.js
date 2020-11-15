import { init } from '@rematch/core';
import { createBrowserHistory } from 'history';

import list from 'components/list/model';
import authors from 'components/authors/model';
import menu from 'components/menu/model';
import post from 'components/post/model';
import modal from 'ui/modal/model';
import auth from 'components/auth/model';
import newAuthors from 'components/new-authors/model';

export const history = createBrowserHistory();

const router = {
    state: history
};

export const store = init({
    models: {
        list,
        authors,
        menu,
        post,
        modal,
        auth,
        router,
        newAuthors  
    }
});

export default { history, store };