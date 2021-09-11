import './Content.css'
import React, { useContext, useEffect } from "react"
import { Switch, Route } from 'react-router-dom'
import Hooks from '../../views/contents/Hooks'
import UseState from '../../views/contents/UseState'
import UseEffect from '../../views/contents/UseEffect'
import UseContext from '../../views/contents/UseContext'
import NaoEncontrado from '../../views/contents//NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Hooks />
            </Route>
            <Route path="/UseState">
                <UseState />
            </Route>
            <Route path="/UseEffect">
                <useEffect />
            </Route>
            <Route path="/UseContext">
                <useContext />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content