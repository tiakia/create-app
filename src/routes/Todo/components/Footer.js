import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { types } from '../modules/actions';

class Footer extends Component {
    renderFilter(filter,name,search=types.SHOW_ALL){
        return (
            <Link to={`/main/todo?${filter}`}
                  className={filter === search ? 'active' : ''}
            >
              {name}
            </Link>
        );
    }
    render(){
        let _search = this.props.filter;
        let search = _search.split('?')[1];
        return(
            <p className="todo-footer">
            <i>Show:</i>

            {this.renderFilter(types.SHOW_ALL, "ALL",search)}

            {this.renderFilter(types.SHOW_COMPLETED, 'Completed',search)}

            {this.renderFilter(types.SHOW_ACTIVE, "Active",search)}

            </p>
        );
    }
}

Footer.propTypes = {
    filter: PropTypes.string
}

export default Footer;
