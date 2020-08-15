import React from 'react';
import { connect } from 'react-redux';

function toggleLesson(module, lesson) {
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson
    };
}

const Sidebar = ({ module, dispatch }) => (
    <aside>
        { module.map( itModule => (
            <div key={itModule.id}>
                <strong>{itModule.title}</strong>
                <ul> 
                    {itModule.lessons.map( itLesson =>(
                        <li key={itLesson.id}>
                            {itLesson.title}
                            <button onClick={() => dispatch(toggleLesson(itModule, itLesson))}>
                                Click!
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>
);

export default connect( state => ({ module: state.module }))(Sidebar);