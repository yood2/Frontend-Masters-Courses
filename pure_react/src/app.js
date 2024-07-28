const Pet = (param) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, param.name),
        React.createElement('h2', {}, param.animal),
        React.createElement('h2', {}, param.breed),
    ]);
};

const App = () => {
    return React.createElement(
        'div',
        {},
        React.createElement('h1', {}, 'Adopt Me!'),
        React.createElement(Pet, {
            name: 'Luna',
            animal: 'Dog',
            breed: 'Havanese',
        }),
        React.createElement(Pet, {
            name: 'Pepper',
            animal: 'Bird',
            breed: 'Cockatiel',
        }),
        React.createElement(Pet, {
            name: 'Doink',
            animal: 'Cat',
            breed: 'Mixed',
        })
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
