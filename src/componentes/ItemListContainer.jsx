import Item from "./Item";


function ItemListContainer(props) {
    return (
        <section className="itemlist">
            <h3>-- {props.greeting} -- </h3>
            <Item
                title="Agenda Audiovisual"
                img="https://res.cloudinary.com/dseriytpl/image/upload/v1758666425/agenda_audiovisual_rv00bh.jpgg"
                price="2000" />
            <Item
                title="Agenda de bob Sponge"
                img="https://res.cloudinary.com/dseriytpl/image/upload/v1758666424/agenda_bobesponga_e3dmkz.jpg"
                price="3000"
            />

        </section>
    )
}
export default ItemListContainer;
