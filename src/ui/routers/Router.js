import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SettingsPage from '../components/pages/settings/Page';
import RoomPage from '../components/pages/room/Page';
import AdminPage from '../components/pages/admin/Page';
import AddRoomPage from '../components/pages/add-room/Page';

const MainComponent = () => (
    <div>
        <div>Main Page</div>
        <Link to="/settings">Settings</Link>
        <br />
        <Link to="/init">Init</Link>
        <br />
        <Link to="/admin">Admin</Link>
    </div>
);

const InitComponent = () => <div>Init Page</div>;

class Router extends React.Component {
    render() {
        const { rooms, currentRoom } = this.props;

        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={MainComponent} exact={true} />
                    <Route path="/settings" component={SettingsPage} />
                    <Route path="/init" component={InitComponent} />
                    <Route path="/admin" component={AdminPage} />
                    <Route path="/room/:roomname" />
                    <Route path="/add-room" component={AddRoomPage} />
                    {rooms.map(room => {
                        return (
                            <Route
                                key={room.name}
                                path={room.path}
                                component={RoomPage}
                            />
                        );
                    })}
                    <Route component={RoomPage} room={currentRoom} />
                </Switch>
            </BrowserRouter>
        );
    }
}

Router.propTypes = {
    rooms: PropTypes.array,
    currentRoom: PropTypes.object,
};

const mapStateToProps = state => {
    const { rooms } = state.application.settings;
    const { currentRoom } = state.application;

    return {
        rooms,
        currentRoom,
    };
};

export default connect(mapStateToProps)(Router);
