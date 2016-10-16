import Map from "can/map/";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';

const AppViewModel = Map.extend({
  define: {
    message: {
      value: 'Hello World!',
      serialize: false
    },
    title: {
      value: 'donejs-chat',
      serialize: false
    }
  }
});

//add a routing rule for the page property
route('/:page', { page: 'home' });

export default AppViewModel;
