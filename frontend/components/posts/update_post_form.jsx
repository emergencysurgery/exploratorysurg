import React from "react";

class UpdatePostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: this.props.post.body,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancelEnter = this.cancelEnter.bind(this);
    }



    handleSubmit(e) {
        e.preventDefault;

        const formData = new FormData();
        formData.append('post[body]', this.state.body);
        formData.id = this.props.post.id;

        this.props.updatePost(formData).then(setTimeout(() => this.props.closeModal(), 100))
        
    } 

    handleChange(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }


    cancelEnter(e) {
        if (e.charCode == 13) {
            e.preventDefault();
        }
    }

    render() {
        const disabled = (this.state.body === "" || this.state.body === this.props.post.body) ? "disabled" : ""; 

       

        return (
            <div className="update-post-wide">
                <h2 className="edit-text outline" >Edit Post's Text</h2>
                <form onSubmit={this.handleSubmit} onKeyPress={this.cancelEnter} className="edit-post-form">
                    <textarea onChange={this.handleChange("body")} id="edit-post-TA" className="edit-TA" value={this.state.body}></textarea>
                
                    <input type="submit" className={`update-post-btn ${disabled}`} value="Update Post"/>
                </form>
            </div>
        )
    }
}

export default UpdatePostForm;