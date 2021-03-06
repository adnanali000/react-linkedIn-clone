import styled from 'styled-components'
import {useState} from 'react'

const PostModal = (props)=>{

    const [editorText,setEditorText] = useState("");

    return( 
        <Container>  
            <Content>
                <Header>
                    <h2>Create a post</h2>
                    <button>
                        <img src="/images/close-icon.png" />
                    </button>
                </Header>    
                <SharedContent>
                    <UserInfo>
                         <img src="/images/user.svg" />
                         <span>Name</span>   
                    </UserInfo>  
                    <Editor>  
                    <textarea 
                    value={editorText}
                    onChange={(e)=>setEditorText(e.target.value)}
                    placeholder="what do you want to talk about?"
                    autoFocus={true}>

                    </textarea>
                    </Editor>
                </SharedContent>    
                <SharedCreations>
                    <AttachAssets>
                        <AssetButton>
                                <img src="/images/share-image.webp" /> 
                        </AssetButton>   
                        <AssetButton>
                                <img src="/images/share-video.png" /> 
                        </AssetButton>    
                    </AttachAssets>
                    <ShareComment>   
                    <AssetButton>
                            <img src ="/images/share-comment.png" />
                            Anyone    
                    </AssetButton>
                   </ShareComment>  
                   <PostButton>
                        post
                   </PostButton>    
                </SharedCreations>    
            </Content>
        </Container>
    );
    }

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 9999;
    color:black;
    background-color: rgba(0,0,0,0.8);
`;

const Content = styled.div`
    width:100%;
    max-width: 552px;
    background-color: white;
    max-height:90%;
    overflow:initial;
    border-radius:5px;
    position:relative;
    display:flex;
    flex-direction:column;
    top:32px;
    margin:0 auto;
`;
const Header = styled.div`
    display:block;
    padding:16px 20px;
    border-bottom:1px solid rgba(0,0,0,0.15);
    font-size:16px;
    line-height:1.5;
    color:rgba(0,0,0,0.6);
    font-weight:400;
    display:flex;
    justify-content:space-between;
    align-items:center;

    button{
        height:45px;
        width:60px;
        min-width:auto;
        color:rgba(0,0,0,0.15);

        png{
            pointer-events:none;
        }
    }
`;

const SharedContent = styled.div`
    display:flex;
    flex-direction: column;
    flex-grow:1;
    overflow-y: auto;
    vertical-align: baseline;
    background:transparent;
    padding:8px 12px;
`;

const UserInfo = styled.div`
    display:flex;
    align-items: center;
    padding:12px 24px;

    img{
        width:48px;
        height:48px;
        background-clip: content-box;
        border:2px solid transparent;
        border-radius:50%;

    }
    span{
        font-weight: 600;
        font-weight: 16px;
        line-height: 1.5;
        margin-left:5px;
    }
`;

const SharedCreations = styled.div`
    display:flex;
    justify-content: space-between;
    padding:12px 24px 12px 16px;
`;


const AssetButton = styled.button`
    display:flex;
    align-items:center;
    height:40px;
    min-width:auto;
    color:rgba(0,0,0,0.5);

`;


const AttachAssets = styled.div`
    align-items:center;
    display:flex;
    padding-right:8px;
  
`;

const ShareComment = styled.div`
    padding-left:8px;
    margin-right:auto;
    border-left: 1px solid rgba(0,0,0,0.15);
`;

const PostButton = styled.button`
    min-width:60px;
    border-radius:20px;
    padding:0 16px 0 16px;
    background:#0a66c2;
    color:white;

    &:hover{
        background:#004182;
    }

`;  

const Editor = styled.div`
    padding
`;

export default PostModal;