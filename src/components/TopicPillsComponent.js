import React from "react"

const TopicPillsComponent = () =>
    <div>
        <h3>Topics</h3>

        <ul class="nav nav-pills wbdv-topic-pill-list">
            <li class="nav-item wbdv-topic-pill">
                <a class="nav-link " href="#">
                    Topic 1</a></li>
            <li class="nav-item wbdv-topic-pill">
                <a class="nav-link active" href="#">
                    Topic 2</a></li>
            <li class="nav-item wbdv-topic-pill">
                <a class="nav-link" href="#">
                    Topic 3</a></li>
            <li class="nav-item wbdv-topic-pill">
                <a class="nav-link" href="#">
                    Topic 4</a></li>
            <li class="nav-item wbdv-topic-pill">
                <a class="nav-link" href="#">
                    Topic 5</a></li>
            <li class="nav-item ">
                <a class="nav-link" href="#">

                    <button class="btn btn-default wbdv-topic-add-btn">+</button>


                </a></li>

        </ul>
    </div>
export default TopicPillsComponent