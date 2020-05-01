import React, {Component} from 'react';
import { Button } from "react-bootstrap";
import withRedux from "next-redux-wrapper";
import { initStore } from "../../../../redux/store";
import { dispatchActions } from "../../../../redux/actions";

import { NEW_DEBTOR, MESSAGE_SHOWED, CHECKOUT_DEBT } from "../../consts/actionsConstants";

class DebtorsItem extends Component {

    checkout = () => {
        let sure = confirm('از حذف این گزینه مطمعنی؟');
        if ( sure ) {
            let id = this.props.debtor.id;
            this.props.fetchData(`http://127.0.0.1/api/debtors/${id}`, CHECKOUT_DEBT, id)    
        }
    }
    render() {
        let {row, debtor} = this.props;
        return (
            <tr>
                <td>{row+1}</td>
                <td>{debtor.name}</td>
                <td>{debtor.description}</td>
                <td>{debtor.amount}</td>
                <td>{debtor.date}</td>
                <td>
                    <Button onClick={this.checkout} variant="success" size="sm">
                        تسویه
                    </Button>{' '}  
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, actionType, data) => dispatch(dispatchActions(url, actionType, data)),
    }
}
export default withRedux(initStore, null, mapDispatchToProps)(DebtorsItem);
// export default DebtorsItem;