import React from "react";
import LeftBar from "./LeftBar";
import Blogs from "./Blogs";
import RightBar from "./RightBar";
export default function HomeContent() {
    return(
    <div className=" flex">
        <LeftBar />
        <Blogs />
        <RightBar />
    </div>);
}
