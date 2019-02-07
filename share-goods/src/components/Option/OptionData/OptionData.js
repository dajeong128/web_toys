import React from 'react'
import OptionSelect from '../../Option/OptionSelect/OptionSelect'


class OptionSelectData extends Component {
    state = {
        name: 'test',
        option: []
    }
    async componentDidMount() {
        const { data } = await axios.get('/goods.json');

        this.setState({
            option: data
        });
        console.log(data);
    }

    render() {
        return (
            <div>
                <OptionSlect option={this.state.products.option} />
            </div>
        )
    }
}

export default OptionSelectData;
