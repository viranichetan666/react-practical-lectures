import ClassComponent from "lectures/classbasedcomponent/ClassComponent";
import FunctionalComponent from "lectures/functionalcomponents/FunctionalComponent";
import PropsAndStateDemo from "lectures/propsandstate/PropsAndStateDemo";
import EventHandling from "lectures/eventhandling/EventHandling";
import FragmentDemo from "lectures/fragment/FragmentDemo";
import ConditionalRendering from "lectures/conditionalrendering/ConditionalRendering";
import Welcome from 'components/welcome/Welcome'

const indexRoutes = [
    { path: "/welcome", component: Welcome },
    { path: "/class-component", component: ClassComponent },
    { path: "/functional-component", component: FunctionalComponent },
    { path: "/props-state", component: PropsAndStateDemo },
    { path: "/event-handling", component: EventHandling },
    { path: "/fragment-demo", component: FragmentDemo },
    { path: "/conditional-rendering", component: ConditionalRendering },
];

export default indexRoutes;
