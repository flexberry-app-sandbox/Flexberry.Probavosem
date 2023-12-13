package Probavosem.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probavosem.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ВходГостя
 */
@Entity(name = "IISProbavosemВходГостя")
@Table(schema = "public", name = "ВходГостя")
public class VxodGostya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RegistrGostej")
    @Convert("RegistrGostej")
    @Column(name = "РегистрГостей", length = 16, unique = true, nullable = false)
    private UUID _registrgostejid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RegistrGostej", insertable = false, updatable = false)
    private RegistrGostej registrgostej;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RegistrVxoda")
    @Convert("RegistrVxoda")
    @Column(name = "РегистрВхода", length = 16, unique = true, nullable = false)
    private UUID _registrvxodaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RegistrVxoda", insertable = false, updatable = false)
    private RegistrVxoda registrvxoda;


    public VxodGostya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}