import HighlighterThemeSelector from "../HighlighterThemeSelector";
import LayoutSelector from "../LayoutSelector";
import ShareModal from "./ShareModal";
import { IDoc } from "../../types";
import { Link } from "react-router-dom";

interface IPageNavMetaProps{
    doc: IDoc,
    selectedGroup: any,
    showThemeSelector?: boolean,
    showLayoutSelector?: boolean,
    showShareModal?: boolean
}
function PageNavMeta({
    doc,
    selectedGroup,
    showThemeSelector,
    showLayoutSelector,
    showShareModal
}: IPageNavMetaProps) {
    const {icon, title} = doc
	return (
        <div className="page__menu-meta">
            <div className="page__menu-metaInner">
                <div className="flex flex__row">
                    {icon && <img alt="Icon" src={icon} width={40}/>}
                    {title && 
                        <h3 className="mtop--10 page__menu-metaTitle">{title}
                            <span className="text__muted">/{selectedGroup?.title}</span>
                        </h3>
                    }
                </div>
                <div className='flex flex__row mtop--20'>
                    <div>
                        <Link to={'/'} className="btn btn__secondary btn__md doc__back">
                            <i className="material-icons font__20">
                                arrow_back_ios
                            </i>
                            <span>Back</span>
                        </Link>
                    </div>
                    <div className="float--right">
                        {/* { showThemeSelector && <HighlighterThemeSelector /> } */}
                        { showLayoutSelector && <LayoutSelector />}
                        { showShareModal && <ShareModal url={window.location.href} /> }
                    </div>
                </div>
            </div>
        </div>
	)
}

export default PageNavMeta


