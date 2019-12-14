import React from "react";


class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: "",
            photoFile: null,
            photoUrl: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handlePreviewCancel = this.handlePreviewCancel.bind(this);
    }

    componentDidMount () {
        this.props.fetchUsers();
    }

    handleChange(field) {
        return (e) => this.setState( { [field]: e.target.value } );
    }

    handleFile(e) {
        let file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState( {photoFile: file, photoUrl: fileReader.result} );
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
        this.setState( { photoFile: e.currentTarget.files[0]} )
        let photoInput = document.getElementById("file-upload");
        photoInput.value = ""
    }

    handleSubmit(e) {
        e.preventDefault;
       
        const formData = new FormData();
        formData.append('post[profileId]', this.props.profile)
        formData.append('post[body]', this.state.body);
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }

        this.props.createPost(formData);
        this.setState( { body: "", photoFile: null, photoUrl: null } );
    } 

    componentWillUnmount() {
        this.setState({
            authorId: this.props.user.id,
            body: "",
            photoFile: null,
            photoUrl: null
        })
    }

  

    handlePreviewCancel () {
        this.setState( { photoFile: null, photoUrl: null } );
    }






    render () {
        
        const preview = this.state.photoUrl ?
        (<div className="prev-cont" id="prev-cont">
            <a onClick={this.handlePreviewCancel} className="boxclose" id="boxclose"></a>
            <img className="img-preview" src={this.state.photoUrl} /> 
        </div> ) : null

        let btn = document.getElementsByClassName("post-submit-btn")[0];
        
        if ( this.state.body.trim() || this.state.photoFile) {
            btn.removeAttribute("disabled");
        } else if (!( this.state.body.trim() || this.state.photoFile)) {
            if (btn) btn.setAttribute("disabled", "disabled")
        }
        
        const photo = this.props.user.profilePicture ? <img src={this.props.user.profilePicture} className="post-prof-pic" />
            : <img src="https://www.punchstick.com/wp-content/uploads/2017/12/default-user-image.png" className="post-prof-pic" />

        
        return (
            <div className="post-form-wide">
                <form className="post-form-21" onSubmit={this.handleSubmit}>
                    <div className="post-form-header">
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                        <span>Create Post</span>
                    </div>
                    <div className="form-body">
                        <div className="post-prof-img">
                            {photo}
                        </div>

                        <textarea onKeyPress={(e) => {e.target.keyCode === 13  && e.preventDefault()}}
                            placeholder={`What's on your mind, ${this.props.user.firstName}`}
                            id="post-ta" value={this.state.body} className="text-a-post"
                            onChange={this.handleChange('body')}>
                        </textarea>
                    </div>

                <div id="prev-cont-wide">
                    
                    {preview}

                </div>
                    
                    
                    <div className="post-form-footer">
                        <label className="post-form-label">
                                <div className="upload-mountains">
                                    <span> 
                                        Upload Photo
                                        <input onChange={this.handleFile} className="file-btn" type="file" id="file-upload"/>
                                    </span>
                                </div>
                        </label>
                        <input type="submit" value="Post" className="post-submit-btn" disabled="disabled"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm;