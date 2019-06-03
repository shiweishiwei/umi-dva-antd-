import router from 'umi/router';

export default {
    namespace: 'users',
    state: {
        user: '',
        isUser: true
    },
    reducers: {
        changeuser(state, values) {
            return { ...state, user: values.payload.user, isUser: values.payload.judge }
        }
    },
    effects: {
        * judgeLink({ payload }, { put }) {
            const judge = payload.username == payload.password;
            if (judge) {
                yield put({
                    type: 'changeuser',
                    payload: {
                        user: payload.username,
                        isUser: judge
                    }
                })
            router.push('/users/users');
            }
            else{
                yield put({
                    type: 'changeuser',
                    payload: {
                        user: '',
                        isUser: judge
                    }
                })
            }
        }
    }
}