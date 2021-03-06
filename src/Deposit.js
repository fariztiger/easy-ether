import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { web3Selector, compoundAPYSelector, compoundEthInstanceSelector, accountSelector, balanceSelector, networkSelector, pageParameterSelector, aaveAPYSelector, supplyValueSelector, depositingSelector, depositConfirmationNumberSelector, aaveLendingPoolSelector} from './redux/selectors';
import { convertWeiToEth, convertEthToWei } from './helpers';
import { BackButton } from './BackButton';
import { FadeInSpinner } from './FadeInSpinner';
import { supplyEth } from './redux/interactions/compound';
import { setSupplyValue } from './redux/actions/deposit';
import { depositEth } from './redux/interactions/aave';

class Deposit extends Component {
    render() {
        const {dispatch, apy, cEthInstance, account, balance, web3, supplyValue, network,
            depositing, confirmationNumber, pageParameter, aaveLendingPool} = this.props;
        const weiSupplyValue = convertEthToWei(web3, supplyValue);
        const ethBalance = convertWeiToEth(web3, balance);

        const changeSaveValue = (e) => dispatch(setSupplyValue(e.target.value));

        const save = () => {
            switch (pageParameter) {
                case 'compound':
                    supplyEth(dispatch, cEthInstance, account, weiSupplyValue, web3, network);
                    break;
                case 'aave':
                    depositEth(dispatch, web3, aaveLendingPool, account, weiSupplyValue, network);
                    break;
                default:
                    break;
            }
        }

        const pageContent = () => {
            return (
                <FadeIn>
                    <Container>
                        <Row>
                            <Col className="text-center">
                                <BackButton dispatch={dispatch} pageName="Save" />
                                <p>Balance Available: {parseFloat(ethBalance).toFixed(5)} ETH</p>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">ETH</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl onChange={changeSaveValue} type="number" min="0" max={ethBalance} step="0.001" aria-describedby="basic-addon1" />
                                </InputGroup>
                                <Button onClick={save}>
                                    Earn {parseFloat(apy).toFixed(2)}% APY
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </FadeIn>
            )
        }

        return (depositing ? <FadeInSpinner message={`Depositing ${supplyValue} ETH`} confirmationNumber={confirmationNumber} /> : pageContent());

    }
}

function mapStateToProps(state){
    const pageParameter = pageParameterSelector(state);
    let apy = null;
    switch (pageParameter) {
        case 'compound':
            apy = compoundAPYSelector(state);
            break;
        case 'aave':
            apy = aaveAPYSelector(state);
            break;
        default:
            break;
    }

	return {
        pageParameter: pageParameterSelector(state),
        web3: web3Selector(state),
        account: accountSelector(state),
        balance: balanceSelector(state),
        network: networkSelector(state),
        supplyValue: supplyValueSelector(state),
        apy: apy,
        cEthInstance: compoundEthInstanceSelector(state),
        aaveLendingPool: aaveLendingPoolSelector(state),
        depositing: depositingSelector(state),
        confirmationNumber: depositConfirmationNumberSelector(state)
	}
}

export default connect(mapStateToProps)(Deposit);