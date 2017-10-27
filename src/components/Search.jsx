class Search extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      inputValue: ''
    };
  }

  inputChange (event) {
    console.log('Input Change');
    this.props.search(event.target.value);
    this.setState({
      inputValue: event.target.value
    });
  }

  render () {
    return (
      <div className="search-bar form-inline">
        <input className= "form-control" type= "text" value= {this.state.inputValue} onChange={console.log('test')}/>
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}



window.Search = Search;