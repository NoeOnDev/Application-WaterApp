import { ToggleButton } from "../components/atoms/ToggleButton"
import { useState } from "react";

export default {
    title: 'Atoms/ToggleButton',
    component: ToggleButton,
}

const Template = (args) => {
    const [isActive, setIsActive] = useState(args.isActive);
    return <ToggleButton {...args} isActive={isActive} onToggle={() => setIsActive(!isActive)} />
}

export const Primary = Template.bind({})
Primary.args = {
    isActive: false,
};