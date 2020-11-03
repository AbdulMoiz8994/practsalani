import React from 'react';


export default class Footer extends React.Component {
    render() {
        const name1 = [{ name: "moiz" }, { surName: "Attari" }]
        return (
            <div>
                {name1.map((item) => {
                    return (
                        <li>
                            {item.name}
                            {item.surName}
                        </li>
                    )
                })}
            </div>
        )



    }
}