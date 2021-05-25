import styled from 'styled-components'

const MainSide = (props)=>{
    return(
        <Container>
            <ShareBox>
                share

            <div>
                <img src = "/images/user.svg" />
                <button>Start a post</button>
            </div>

            <div>
                <button>
                <img src = "/images/photo-icon.png" />
                <span>Photo</span>
                </button>

                <button>
                <img src = "/images/video-icon.png" />
                <span>Video</span>
                </button>

                <button>
                <img src = "/images/event-icon.png" />
                <span>Event</span>
                </button>

                <button>
                <img src = "/images/article-icon.png" />
                <span>Write article</span>
                </button>
            </div>

            </ShareBox>

            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src = "/images/user.svg" />
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>    
                        </a>    
                        <button>
                            <img src = "/images/ellipsis.png" />
                        </button>    
                    </SharedActor>
                    <Description>
                            Description
                    </Description>
                    <SharedImg>
                        <a>
                            <img src = "/images/shared-image.jpg" />
                        </a>    
                    </SharedImg>
                    <SocialCount>
                        <li>
                            <button>
                                <img src = "https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" />
                                <img src = "https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" />
                                <span>75</span>
                            </button>    
                        </li>
                        <li>
                            <a>
                                2 comments
                            </a>    
                        </li>

                    </SocialCount>  

                    <SocialAction> 
                    <button>
                        <img src="/images/like-icon.png" alt=""/>
                        <span>Like</span>

                    </button>    
                    <button>
                        <img src="/images/comment-icon.png" alt=""/>
                        <span>Comments</span>

                    </button>  
                    <button>
                        <img src="/images/share-icon.webp" alt=""/>
                        <span>Share</span>

                    </button>  
                    <button>
                        <img src="/images/send-icon.png" alt=""/>
                        <span>Send</span>

                    </button>    
                    </SocialAction>
                </Article>    
            </div>
            

        </Container>    
    );
}


const Container = styled.div`
    grid-area: main;

    button > img{
        width:30px;
        padding:0.5px;
    }
`;

const CommonCard = styled.div`
    overflow:hidden;
    text-align:center;
    margin-bottom:8px;
    background-color: #fff;
    border-radius:5px;
    position:relative;
    border:none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%),
                0 0 0 rgb(0 0 0 / 20%);


`;

const ShareBox = styled(CommonCard)`
    display:flex;
    flex-direction:column;
    color:#958b7b;    
    margin: 0 0 8px;
    background:white;
    
    div{
        button{
            outline:none;
            font-size:14px;
            color:rgba(0,0,0,0.6);
            line-height:1.5;
            min-height:48px;
            background:transparent;
            border:none;
            display:flex;
            align-items:center;
            font-weight:600;
        }
        &:first-child{
            display:flex;
            align-items:center;
            padding:8px 16px 8px 16px;
            img{
                width:48px;
                border-radius:50%;
                margin-right:8px;

            }
            button{
                margin:4px 0;
                flex-grow:1;
                border-radius:35px;
                padding-left:16px;
                border:1px solid rgba(0,0,0,0.16);
                background-color:white;
                text-align:left;
            }
        }

        &:nth-child(2){
            display:flex;
            flex-wrap:wrap;
            justify-content:space-around;
            padding-bottom:4px;

            button{
                img{
                    margin: 0 4px 0 -2px;
                }
                span{
                    color:#70b5f9
                }
            }
        }

    }

`;

const Article = styled(CommonCard)`
    padding:0;
    margin:0 0 8px;
    overflow:visible;

    button > img{
        width:15px;
    }

`;

const SharedActor = styled.div`
    padding-right:40px;
    flex-wrap:nowrap;
    padding:12px 16px 0;
    margin-bottom:8px;
    align-items:Center;
    display:flex;
    a {
        margin-right:12px;
        flex-grow: 1;
        overflow:hidden;
        display:flex;
        text-decoration:none;

        img{
            width:48px;
            height:48px
        }

        & > div{
            display:flex;
            flex-direction:column;
            flex-grow:1;
            flex-basis:0;
            margin-left:8px;
            overflow: hidden;
            span{
                text-align:left;
                &:first-child{
                    font-size:14px;
                    font-weight:700;
                    color:rgba(0,0,0,1);
                }

                &:nth-child(n + 1){
                    font-size:12px;
                    color:rgba(0,0,0,0.6);

                }
            }
        }
        
    }

    button{
        position:absolute;
        right:12px;
        top:0;
        background:transparent;
        border:none;
        outline:none;
    }
`;

const Description = styled.div`
    padding:0 16px;
    overflow:hidden;
    color: rgba(0,0,0,0.9);
    text-align:left;

`;

const SharedImg = styled.div`
    margin-top:8px;
    width:100%;
    display: block;
    position:relative;
    background-color:#f9fafb;

    img {
        object-fit:contain;
        width:100%;
        height:100%;
    }
`;


const SocialCount = styled.ul`
    line-height:1.3;
    display:flex;
    align-items:flex-start;
    overflow:auto;
    margin:0 16px;
    padding:8px 0;
    list-style-type:none;
    border:1px solid #e9e5df;
    
    li {
        margin-right:5px;
        font-size:12px;
        button{
            display:flex;
            width:80px;
        }
       
    }


`;

const SocialAction = styled.div`
    align-items:center;
    display:flex;
    justify-content:flex-start;
    margin:0;
    min-height:48px;
    padding:4px 8px;
    button{
        display:inline-flex;
        align-items: center;
        padding:8px;
        color:#0a66c2;

        @media (min-width:768px){
            span{
                margin-left:5px;
            }
        }
    }

`;

export default MainSide;