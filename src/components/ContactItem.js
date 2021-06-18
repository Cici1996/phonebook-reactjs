import { Avatar } from "@material-ui/core"
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

const ContactItem = ({ item, onClickDelete, onClickFavorite }) => {

    const handleClickDelete = () => {
        onClickDelete(item.id)
    }

    const handleClickFavorite = () => {
        onClickFavorite(item.id)
    }

    return (
        <>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={item?.image_url} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={item?.name}
                    />
                    <ListItemSecondaryAction>
                        <IconButton onClick={handleClickFavorite} edge="end" aria-label="delete">
                            {!item?.favorite && <FavoriteBorder /> }
                            {item?.favorite && <Favorite /> } 
                        </IconButton>
                        <IconButton onClick={handleClickDelete} edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>

        </>
    )
}

export default ContactItem