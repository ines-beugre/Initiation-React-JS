17 04 18
class Wine extends Component {
    static PropTypes = {
        wine: PropTypes.shape({
            name: PropTypes.string,
            origin: PropTypes.string,
            color: PropTypes.string
        })
    };
    static defaultProps = {
        wine : {
            name: 'Some Wine',
            origin: 'Bordeaux',
            color: 'White'
        }
    };

    render() {
        return (
    <div className="card horizontal">
        <div className="card-stacked">
            <div className="card-content">
                <h3>{this.props.wine.name}</h3>
                <h3>{this.props.wine.origin}</h3>
                <h3>{this.props.wine.color}</h3>
            </div>
        </div>
    </div>
        )
    }
}