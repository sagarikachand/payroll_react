import React, { Component } from 'react'

import FieldInput from '../components/ui/FieldInput'
import Button from '../components/ui/Buttons'


class ExtractViewer extends Component {

    state = {
        searchForm:
        {
            // 'personName': {
            //     elementType: 'input',
            //     value: '',
            //     label: 'First Name / Last Name / ID',
            //     config: {
            //         placeholder: "Select Person",
            //         type: 'text',
            //         name: 'personName',
            //         id: 'personName'
            //     }
            // },

            'personName': {
                    elementType: 'autoCompleteInput',
                    value: '',
                    label: 'First Name / Last Name / ID',
                    config: {
                        placeholder: "Select Person",
                        type: 'text',
                        name: 'personName',
                        id: 'personName'
                    }
                },

            'payrollProcessor': {
                elementType: 'input',
                value: '',
                label: 'Payroll Processor',
                config: {
                    placeholder: "Select Payroll Processor",
                    type: 'text',
                    name: 'payrollProcessor',
                    id: 'payrollProcessor'
                }
            },
            
            

            'infotype': {
                elementType: 'input',
                value: '',
                label: 'Infotype',
                config: {
                    placeholder: "Select Infotype",
                    type: 'text',
                    name: 'infotype',
                    id: 'infotype'
                }
            },

            'infotypeVersion': {
                elementType: 'select',
                value: '',
                label: 'infotypeVersion',
                config: {
                    placeholder: "Select",
                    type: 'select',
                    name: 'infotypeVersion',
                    id:'infotypeVersion'
                },
                optionList:[]
            },

            'tranFromDate': {
                elementType: 'input',
                value: '',
                label: 'Transaction From Date',
                config: {
                    placeholder: "dd/mmm/yyyy",
                    type: 'text',
                    name: 'tranFromDate',
                    id: 'tranFromDate'
                }
            },
            'tranToDate': {
                elementType: 'input',
                value: '',
                label: 'Transaction To Date',
                config: {
                    placeholder: "dd/mmm/yyyy",
                    type: 'text',
                    name: 'tranToDate',
                    id: 'tranToDate'
                }
            },

           

            'fromDate': {
                elementType: 'input',
                value: '',
                label: ' From Date',
                config: {
                    placeholder: "dd/mmm/yyyy",
                    type: 'text',
                    name: 'fromDate',
                    id: 'fromDate'
                }
            },

            'toDate': {
                elementType: 'input',
                value: '',
                label: ' To Date',
                config: {
                    placeholder: "dd/mmm/yyyy",
                    type: 'text',
                    name: 'toDate',
                    id: 'toDate'
                }
            },

            // 'personName': {
            //     elementType: 'input',
            //     value: '',
            //     label: 'First Name / Last Name / ID',
            //     config: {
            //         placeholder: "Select Person",
            //         type: 'text',
            //         name: 'personName',
            //         id: 'personName7'
            //     }
            // },

            'eventType': {
                elementType: 'input',
                value: '',
                label: 'Event Type',
                config: {
                    placeholder: "Select Event Type",
                    type: 'text',
                    name: 'eventType',
                    id: 'eventType'
                }
            },
            'status': {
                elementType: 'select',
                value: '',
                label: 'Status',
                config: {
                    placeholder: "Select",
                    type: 'select',
                    name: 'status',
                    id: 'status'
                },
                optionList:[]
            },
            'fileName': {
                elementType: 'input',
                value: '',
                label: 'Extract File Name',
                config: {
                    placeholder: "Enter File Name",
                    type: 'text',
                    name: 'fileName',
                    id: 'fileName'
                }
            },



        }
    }

    handleFieldChange = (event, name) => {
        let updatedFormData = { ...this.state.searchForm }
        let updatedFieldData = { ...this.state.searchForm[name] }
        updatedFieldData.value = event.target.value
        updatedFormData[name] = updatedFieldData

        this.setState({
            searchForm: updatedFormData
        })
    }

    handleResetBtnClick =() =>{
        console.log('clicked')
    }

    handleSearchBtnClick =() =>{
        console.log('clicked search')
    }

    renderFileds = () => {

        return Object.keys(this.state.searchForm).map((key) => {

            return (
                <div className="input_item" key={key} >
                    <FieldInput elementData={this.state.searchForm[key]} change={(event, name) => this.handleFieldChange(event, name)} />
                </div>
            )
        })

    }

    render() {
        return (
            <div className="extractView_wrapper">
                <h1> Extract Viewer</h1>
                <div className="searchForm_wrapper">
                    <form>
                        <div className="input_wrapper">

                            {this.renderFileds()}

                        </div>
                    </form>
                    <div className="button_wrapper">
                    <Button color="#215fb2" bgColor="#f2f5f9"  click={this.handleResetBtnClick}>Reset</Button>
                    <Button color="#f2f5f9" bgColor="#215fb2"  click={this.handleResetBtnClick}>Search</Button>
                    </div> 
                </div>

            </div>

        )
    }
}


export default ExtractViewer