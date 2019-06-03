import { connect } from 'dva';

function Users({ user }) {
    return (
        <div>
            <h1>{`Hello,${user}`}</h1>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        user: state.users.user
    };
}

export default connect(mapStateToProps)(Users);