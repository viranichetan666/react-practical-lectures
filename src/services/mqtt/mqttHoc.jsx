// HOC.js

import React, { useContext } from "react";
import { mqttContext } from "services/mqtt/MqttProvider";

const Mqtt = HocComponent => {
  return function WrappedComponent(props) {
    const [state, dispatch] = useContext(mqttContext);

    return (
      <div>
        <HocComponent
          {...props}
          mqttState={state}
          mqttDispatch={dispatch}
        ></HocComponent>
      </div>
    );
  };
};

export default Mqtt;
