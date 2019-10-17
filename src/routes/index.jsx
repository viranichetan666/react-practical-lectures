import ClassComponent from "lectures/classbasedcomponent/ClassComponent";
import FunctionalComponent from "lectures/functionalcomponents/FunctionalComponent";
import PropsAndStateDemo from "lectures/propsandstate/PropsAndStateDemo";
import EventHandling from "lectures/eventhandling/EventHandling";
import FragmentDemo from "lectures/fragment/FragmentDemo";
import ConditionalRendering from "lectures/conditionalrendering/ConditionalRendering";
import Welcome from "components/welcome/Welcome";
import Forms from "lectures/forms/Forms";
import BasicHooks from "lectures/hooks/BasicHooks";
import Composition from "lectures/composition/Composition";
import AdvanceHooks from "advancelecture/hooks/AdvanceHooks";
// import ReduxUse from 'advancelecture/reduxconcept/ReduxUse';
import ReduxHooks from "./../advancelecture/reduxconcept/hooks/ReduxHooks";
import StyleComponent from "advancelecture/styledcomponent/StyleComponent";
import HighrOrderComponent from "advancelecture/higherordercomponent/Component";
import ReduxSagaDemo from "advancelecture/reduxsaga/ReduxSagaDemo";
import TaskManagement from "advancelecture/mqttappappcontainer/TaskManagement";

const indexRoutes = [
  { path: "/welcome", component: Welcome },
  { path: "/class-component", component: ClassComponent },
  { path: "/functional-component", component: FunctionalComponent },
  { path: "/props-state", component: PropsAndStateDemo },
  { path: "/event-handling", component: EventHandling },
  { path: "/fragment-demo", component: FragmentDemo },
  { path: "/conditional-rendering", component: ConditionalRendering },
  { path: "/forms", component: Forms },
  { path: "/basic-hooks", component: BasicHooks },
  { path: "/composition", component: Composition },
  { path: "/advance-hook", component: AdvanceHooks },
  { path: "/redux", component: ReduxHooks },
  { path: "/style-component", component: StyleComponent },
  { path: "/higher-order-component", component: HighrOrderComponent },
  { path: "/redux-saga", component: ReduxSagaDemo },
  { path: "/mqtt-app", component: TaskManagement }
];

export default indexRoutes;
